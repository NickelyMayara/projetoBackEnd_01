import { db } from "../db.js"

export const getBooks = (req, res) => {

    const query = "SELECT * FROM books"

    db.query(query, (error, data) => {
        if(error){
            return res.json(error)
        }
        return res.status(200).json(data)
    })
}