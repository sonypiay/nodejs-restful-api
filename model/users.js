import { db } from '../src/database.js';

class Users {
    
    async all( params ) {
        let whereClause = {};

        if( params.query.name ) {
            whereClause.name = {
                search: params.query.name
            }
        }

        const result = await db.users.findMany({
            select: {
                id: true,
                name: true,
                phone: true,
                created_at: true,
                updated_at: true,
                api_key: true,
                is_email_verified: true,
            },
            orderBy: {
                created_at: 'desc'
            },
            where: whereClause
        });

        return result;
    }
}

export {
    Users
};