<script setup>
import { ref } from 'vue'
import DefaultTable from './DefaultTable.vue'

const count = ref(0);
const multiplier = ref(1);
const text = ref('');
const items = ref(new Set());
const itemsWithCounter = ref([]);
const btnClass = ref('btn btn-dark');

const updateCounter = () => {
  count.value += multiplier.value;
  insert();
}

const insert = () => {
  items.value.add(multiplier.value);
  insertWithCounter();
}

const insertWithCounter = () => {
  const existing = itemsWithCounter.value.find(
    item => item.multiplier === multiplier.value
  );

  if (existing) {
    existing.counter++;
  } else {
    itemsWithCounter.value.push({ multiplier: multiplier.value, counter: 1 });
  }
}

const resetAll = () => {
  count.value = 0;
  items.value = new Set();
  itemsWithCounter.value = [];
  multiplier.value = 1;
  text.value = '';
};

</script>

<template>
  <div class="row">
    <div class="col-6">
      <p>Wynik: {{ count }}</p>


      <button :class="btnClass" @click="updateCounter">Zwiększ o {{ multiplier }} tekst: {{ text }}</button>
      <button :class="btnClass" @mouseenter="updateCounter">Zwiększ o {{ multiplier }} najechanie: {{ text }}</button>
      <br />
      <button class="btn btn-danger" @click="resetAll">Reset</button>
      <br />
      <input type="number" v-model.number="multiplier" min="1" placeholder="Wprowadź mnożnik" />
      <br />
      <input type="text" v-model="text" placeholder="Wprowadź tekst" />
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col-6">
          Użyte mnożniki:
          <TransitionGroup tag="ul" name="fade" class="container">
            <li v-for="item in items" class="item" :key="item">
              {{ item }}
            </li>
          </TransitionGroup>
        </div>
        <div class="col-6">
          Użyte mnożniki z ilością:
          <DefaultTable :labels="['Mnożnik', 'Ilość']" :items="itemsWithCounter" />
        </div>
      </div>
    </div>
  </div>
</template>