<template>
  <div>
    <div class="title__container">
          <span class="management__title">Graphs</span>
    </div>
    <div class="graph-selection__container">
        <select v-model="currentChartId">
            <option v-for="(option, idx) in options.items" :key="idx" :value="option.chartId">
                {{option.caption}}
            </option>           
        </select>
    </div>
    
    <div v-if="currentChartId == 2" class="graph__container">
        <graph-bar3d
            :width="700"
            :height="400"
            :axis-min="0"
            :axis-max="50"
            :padding-top="100"
            :padding-bottom="100"
            :depth="180"
            :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
            :names="names"
            :values="values">
            <note :text="'3D-Bar Chart'" :align="'left'"></note>
            <tooltip :names="names" :position="'left'"></tooltip>
            <legends :names="names"></legends>
            <rotate3d></rotate3d>
        </graph-bar3d>
    </div>
    <div v-else class="graph__container">  
            <div class="reminder">Note: This needs to have two set of coordinates to show the graph.</div>
            <graph-line
                :width="700"
                :height="400"
                :shape="'normal'"
                :axis-min="0"
                :axis-max="50"
                :axis-full-mode="true"
                :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
                :names="names"
                :values="values">
                <note :text="'Line Chart'"></note>
                <tooltip :names="names" :position="'right'"></tooltip>
                <legends :names="names"></legends>
                <guideline :tooltip-y="true"></guideline>
            </graph-line>
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
        currentChartId: 2,
        names: [ 'X', 'Y'],
        values: [],
        options: {
            items: [
                {caption: 'Line Chart', chartId: 1},
                {caption: '3D Bar Chart', chartId: 2}
            ]
        }           
    }
  },
  created() {
      const coordinates = this.getExistingData();
      this.values = [this.extractX(coordinates) || [], this.extractY(coordinates) || []];
  },
  methods: {   
    extractX(coordinates) {
        return coordinates && coordinates.map(item => item.coordinateX);
    },
    extractY(coordinates) {
        return coordinates && coordinates.map(item => item.coordinateY);
    }
  }

}
</script>
<style scoped>

    .reminder {
        font-size: .8rem;
        color: #d7d7d7;
        padding-left: 40px;
    }

    .graph__container {
        padding: 10px 50px;
    }
   
    .title__container {
      padding: 10px 20px;
      background-color: blue;
    }

     .management__title {
        font-size: 1rem;
        color: white;
        font-weight: 600;
    }

    .graph-selection__container {
        padding: 20px 80px;
    }

</style>
