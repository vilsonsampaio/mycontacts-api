const db = require('../../database');

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const directions = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT * FROM categories ORDER BY name ${directions}
    `);

    return rows;
  }

  async store({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }
}

module.exports = new CategoryRepository();
