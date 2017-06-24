// 多人挑战表
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('multiplayer', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {tableName: 'multiplayer'})
}
