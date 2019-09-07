'use strict';
module.exports = (sequelize, DataTypes) => {
 var Employee = sequelize.define('Employee', {
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    designation:{
      type:DataTypes.String,
      defaultValue:false,
    },{});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company,{
      foreignKey:'companyId',
      onDelete:'CASCADE',
    })    
  };
  return Employee;
};