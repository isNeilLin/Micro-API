// 单人挑战表
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('singleplayer', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '2:00'
    },
    cal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 300
    },
    star: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 1.0
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    }
  }, {tableName: 'singleplayer'})
}
