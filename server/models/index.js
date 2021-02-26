import Client from './Client';
import Chargement from './Chargement';
import Envoi from './Envoi';
import Transaction from './Transactions';


Client.hasMany(Envoi, { foreignKey: 'idClient' })
Envoi.belongsTo(Client, { foreignKey: 'idClient'})

export { Client,Envoi}