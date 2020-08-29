import * as React from 'react'
import { Field, Form, Formik } from 'formik'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const axios = require('axios').default 

const showCIMISET = () => {
  alert("Hello")
}

const handleDateChange = async (date: Date) => {
  // const instance = axios.create({
  //   baseURL: 'https://et.water.ca.gov/api/data',
  //   timeout: 10000,
  //   headers: {'X-Custom-Header': 'foobar'}
  // });
  const dateEntity = new Date(date)
  const startDate = `${dateEntity.getFullYear()}-${dateEntity.getMonth()}-${dateEntity.getDate()}`
  const dummyDate = new Date()
  dummyDate.setDate(dateEntity.getDate() + 7)
  const endDate = `${dummyDate.getFullYear()}-${dummyDate.getMonth()}-${dummyDate.getDate()}`
//   var someDate = new Date();
// var numberOfDaysToAdd = 6;
// someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
// var dd = someDate.getDate();
// var mm = someDate.getMonth() + 1;
// var y = someDate.getFullYear();
// var someFormattedDate = dd + '/'+ mm + '/'+ y;
// console.log(someFormattedDate)
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const proxyurl = 'https://cors-proxy.htmldriven.com/'
  await axios.get(`https://et.water.ca.gov/api/data?appKey=e97e98e0-d962-4a88-bc08-5766dff0fad5&targets=85328&startDate=${startDate}&endDate=${endDate}&dataItems=day-eto&prioritizeSCS=Y`, { headers: { 'Content-Type': 'application/json', mode: 'cors', 'X-Requested-With': 'XMLHttpRequest' }}).then(
  function (abc: any) { 
    debugger
    console.log(abc)}
  ).catch((err: any) => console.log(err))
}

const FormDataForm = () => {
  return (
  <div>
    <Formik
      initialValues={{ numberOfSets: 1 }}
      validate={() => {}}
      onSubmit={(values) => {
        alert(JSON.stringify(values))
        showCIMISET()
      }}
    >
      <Form>
        <div className="orchard-setup">
          <h2>Basic Orchards Setup</h2>
          <div className="form-fields">
            <div className="form-field">
              <label>Year Orchards Planted</label>
              <Field type="number" min="1" name="yearOrchardsPlanted" placeHolder="Year Orchards Planted" />
            </div>
            <div className="form-field">
              <label>Acres</label>
              <Field type="number" min="0" name="acres" />
            </div>
            <div className="form-field">
              <label>Row Spacing</label>
              <Field type="number" min="0" name="rowSpacing" />
            </div>
            <div className="form-field">
              <label>Tree Spacing</label>
              <Field type="number" min="0" name="treeSpacing" />
            </div>
            <div className="form-field">
              <label>Week Start</label>
              <DatePicker
                selected={null}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                showWeekNumbers
              />
              {/* <Field type="date" min="0" name="weekStart" /> */}
            </div>
          </div>
        </div>
        <div className="irrigation-setup">
          <h2>Irrigation Setup</h2>
          <div className="form-field">
            <label>Number of Sets</label>
            <Field type="number" min="1" name="numberOfSets" placeHolder="Number of Sets" />
          </div>
        </div>
        <button type="submit">Get Gallons Required</button>
      </Form>
    </Formik>    
  </div>
  )  
}

export default FormDataForm