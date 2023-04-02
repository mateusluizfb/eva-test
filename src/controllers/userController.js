const { User } = require('../model');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find({});

            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}
