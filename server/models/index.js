import Client from './Client';
import Chargement from './Chargement';
import Envoi from './Envoi';
import Adresse from './Adresse';
import Colis from './Colis';
import Destinataire from './Destinataire';
import Facture from './Facture';
import Ramassage from './Ramassage';



Client.hasMany(Colis, { foreignKey: 'idClient' })
Colis.belongsTo(Client, { foreignKey: 'idClient'})

Destinataire.hasMany(Colis, { foreignKey: 'idDestinataire' })
Colis.belongsTo(Destinataire, { foreignKey: 'idDestinataire'})

Adresse.hasMany(Client, { foreignKey: 'idAdresse' })
Client.belongsTo(Adresse, { foreignKey: 'idAdresse'})

Adresse.hasMany(Destinataire, { foreignKey: 'idAdresse' })
Destinataire.belongsTo(Adresse, { foreignKey: 'idAdresse'})

Adresse.hasMany(Ramassage, { foreignKey: 'idAdresse' })
Ramassage.belongsTo(Adresse, { foreignKey: 'idAdresse'})

Colis.hasMany(Envoi, { foreignKey: 'idColis' })
Envoi.belongsTo(Colis, { foreignKey: 'idCOlis'})

Ramassage.hasMany(Envoi, { foreignKey: 'idRamasage' })
Envoi.belongsTo(Ramassage, { foreignKey: 'idRamassage'})

Envoi.hasMany(Facture, { foreignKey: 'idEnvoi' })
Facture.belongsTo(Envoi, { foreignKey: 'idEnvoi'})


export { Client,Envoi,Ramassage,Adresse,Destinataire,Colis,Facture}