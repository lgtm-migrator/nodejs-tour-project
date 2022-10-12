"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class PaymentStatus extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	PaymentStatus.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			hooks: {
				beforeFind: (options) => {
					options.attributes = ["id", "name", "description"];
					options.order = [
						["createdAt", "DESC"],
						["id", "DESC"],
					];
				},
			},
			sequelize,
			modelName: "PaymentStatus",
			tableName: "paymentstatuses",
		}
	);
	return PaymentStatus;
};
