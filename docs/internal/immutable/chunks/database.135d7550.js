import{w as r}from"./paths.8c27b622.js";import{B as t}from"./index.e7ce1f94.js";import{D as o}from"./index.ff7e3b01.js";const n=[{name:"admin_raw",parquet:"admin_raw.parquet"},{name:"badyear_raw",parquet:"badyear_raw.parquet"},{name:"chirps_raw",parquet:"chirps_raw.parquet"},{name:"crop_cal_raw",parquet:"crop_cal_raw.parquet"},{name:"evi_raw",parquet:"evi_raw.parquet"}],i=new t;let l=r(i.createBackend({id:"duckdb1",type:"duckdb",name:null,url:null,sources:n}));async function s(){console.log("dbGoLive started");let a=Date.now();await o(l).init();let e=Date.now();return console.log("db go live time is,",e-a),e-a}export{s as a,l as d};
