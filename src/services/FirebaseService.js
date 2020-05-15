import {firebaseDatabase, firebaseAuth} from '../utils/firebaseUtils'

export default class FirebaseService {

    static getBooks = (nodePath, callback) => {
        let query = firebaseDatabase.ref(nodePath).orderByKey();            
        
        query.once('value', (dataSnapshot) => {           
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push({
                    key: item.key,
                    title: item.titulo,
                    author: item.autor,
                    pages: item.paginas,
                    year: item.ano,
                    isbn: item.isbn
                });
            });
            callback(items);
        });

        return query;
    };    
}