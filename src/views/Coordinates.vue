<template>
  <div class="management__container">
      <div class="title__container">
          <span class="management__title">Manage Coordinates</span>
      </div>
      <div class="table__container">
        <table class="table__coordinates">
          <thead>
            <tr>
              <th width="45%">Coordinate X</th>
              <th width="45%">Coordinate Y</th>
              <th width="10%">Action</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(item, idx) in tables.coordinates.items" :key="idx" @click="onRowClick(item)">
                <td>                  
                  <input v-if="item.isEditMode" type="number" v-model="item.coordinateX" />
                  <span v-else>{{item.coordinateX}}</span>
                </td>
                <td>                 
                  <input v-if="item.isEditMode" type="number" v-model="item.coordinateY" />
                  <span v-else>{{item.coordinateY}}</span>
                <td>
                  <div>
                    <button v-if="!item.isEditMode" class="action__icons" @click.stop="onAddNewRow">
                      <v-icon name="plus-circle" ></v-icon>
                    </button>
                    <button v-if="!item.isEditMode && tables.coordinates.items.length > 1" class="action__icons" @click.stop="onRemoveRow(idx)">
                      <v-icon name="trash" ></v-icon>
                    </button>
                    <button v-if="item.isEditMode" class="action__icons" @click.stop="onSave(idx)">
                      <v-icon name="check" ></v-icon>
                    </button>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import Utils from '../mixins/Utils';

export default {
  name: 'Coordinates',
  mixins: [Utils],
  data() {
    return {
      isVisible: true,
      tables: {
        coordinates: {
          items: []
        }
      }
    }
  },
  created() {
    if (this.hasExistingData()) {
      this.tables.coordinates.items = this.getExistingData();
    } else {
      this.onAddNewRow();
    }
  },
  methods: {
    hasExistingData() {
      // check local storage for existing data
      return localStorage.hasOwnProperty('coordinates');
    },
    getExistingData() {
      const data = JSON.parse(localStorage.getItem('coordinates'));
      return data;
    },
    onAddNewRow() {  
        this.cancelTableEditables();         
        this.tables.coordinates.items.push({ coordinateX: null, coordinateY: null, isEditMode: false });              
    },
    onRemoveRow(idx) {
       this.tables.coordinates.items.splice(idx, 1);
    },
    onRowClick(row) {
      this.cancelTableEditables();       
      row.isEditMode = true;
    },
    cancelTableEditables() {
      const rows = this.tables.coordinates.items;
      rows.forEach(row => {       
        row.isEditMode = false
      });
    },    
    onSave() {
      const data = this.tables.coordinates.items.map(item => {
        item.isEditMode = false;
        return item;
      }).filter(item => !this.isEmpty(item.coordinateX) || !this.isEmpty(item.coordinateY));
      
      localStorage.setItem('coordinates', JSON.stringify(data));
      this.cancelTableEditables(); 
    }
  }

}
</script>
<style scoped>
   
    .title__container {
      padding: 10px 20px;
      background-color: blue;
    }

    .management__title {
        font-size: 1rem;
        color: white;
        font-weight: 600;
    }

    .table__coordinates {
      width: 100%;
      border-collapse: collapse;
      font-size: .875rem;
    }

    .table__container {
      padding: 10px 20px;
    }

    .table__coordinates th, .table__coordinates td {
        border: 1px solid #d7d7d7;
        text-align: left;
        padding: 5px 10px;
    }

    .action__icons {
      padding: 0 3px;
      background: none;
      border: none;     
      cursor: pointer;
    }

   input {
     width: 100%;
   }

</style>
