<template>
  <div class="guntae container">
    <section class="section">
      <div class="container">
        <h1 class="title">근태처리</h1>
        <h2 class="subtitle">
          근태를 처리해볼까!
        </h2>
      </div>
    </section>
    <h1 class="title notification">근태 달력</h1>
    <div class="section content primary">
      <b-datepicker inline
                    v-model="date"
                    :events="events"
                    :indicators="indicators"
                    @input="onChangeDate"
                    @change-month="onChangeMonth"
                    @change-year="onChangeYear"
      />
      <b-table :data="detail"
               narrowed="enabled">
        <template slot-scope="props">
          <b-table-column field="date"
                          label="DATE">
            {{ props.row.date.getFullYear() }}년 {{ props.row.date.getMonth() }}월 {{ props.row.date.getDate() }}일
          </b-table-column>
          <b-table-column field="name"
                          label="NAME">
            {{ props.row.name }}
          </b-table-column>
          <b-table-column field="type"
                          label="TYPE">
            <span class="tag is-success">
              {{ props.row.typeName }}
            </span>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndentControl',
  data () {
    return {
      detail: [],
      date: new Date(),
      events: [
        {
          date: new Date(2018, 7, 6),
          name: '김예나',
        }, {
          date: new Date(2018, 7, 7),
          name: '김예나',
          typeName: '연차',
          type: 'is-success',
        }, {
          date: new Date(2018, 7, 10),
          name: '김예나',
          typeName: '연차',
          type: 'is-success',
        }, {
          date: new Date(2018, 7, 10),
          name: '김예나',
          typeName: '외근',
          type: 'is-info',
        }, {
          date: new Date(2018, 7, 10),
          name: '김예나',
          typeName: '부분연차',
          type: 'is-warning',
        }, {
          date: new Date(2018, 7, 10),
          name: '김예나',
          typeName: '병가',
          type: 'is-danger',
        }
      ],
    }
  },
  computed: {
    indicators () {
      return 'dots'
    },
  },
  mounted () {
    this.date.setHours(0, 0, 0, 0)
    this.detail = this.events.filter(item => item.date.getTime() === this.date.getTime())
  },
  methods: {
    onChangeDate (date) {
      console.log('change to ' + date)
      this.detail = this.events.filter(item => item.date.getTime() === date.getTime())
    },
    onChangeMonth (month) {
      console.log('change to ' + month)
    },
    onChangeYear (year) {
      console.log('change to ' + year)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
