import {Sequelize} from 'sequelize'
const sequelize = new Sequelize('masjid', 'admin', 'dSzYiSWh', {
  host : 'mysql-116579-0.cloudclusters.net',
  port : 19672,
  dialect : 'mariadb',
  dialectOptions: {
    useUTC: false //for reading from database
  },
  timezone: '+08:00' //for writing to database
});

export default sequelize;


// import {Sequelize} from 'sequelize'
// const sequelize = new Sequelize('masjid_smokemass', 'masjid_smokemass', '5808288bf56424b463c971af1732cf4d50c29e70', {
//   host : 'vx7.h.filess.io',
//   port : 3305,
//   dialect : 'mariadb',
//   dialectOptions: {
//     useUTC: false //for reading from database
//   },
//   timezone: '+08:00' //for writing to database
// });

// export default sequelize;