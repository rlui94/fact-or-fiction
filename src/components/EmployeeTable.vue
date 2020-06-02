<template>
  <div id="employee-table">
    <h1>{{ process.env.VUE_APP_HOST }}</h1>
    <table>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
        </tr>
      </tbody>
    </table>
    <ul v-for="country in countries" :key="country.name">
      <li>{{ country.name }}</li>
    </ul>
  </div>
</template>

<script>
import CountriesApi from '@/api/Countries'
export default {
  name: 'employee-table',
  props: {
      employees: Array,
  },

  data(){
    return{
      countries: [],
    }
  },

  created(){
    CountriesApi.getCountries()
      .then(countries =>{
        this.countries = countries
      })
  }
}
</script>

<style scoped></style>