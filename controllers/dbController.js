const { card } = require(`../models/index`);

module.exports = {
    getCards(req, res) {
        card.find()
            .then((cards) => res.json(cards))
            .catch((err) => res.status(500).json(err));
    },
    getCardbyID(req, res) {
        card.findOne({ _id: req.params.cardId })
    },
    createCard(req, res) {
        card.create(req.body)
            .then((card) => res.json(card))
            .catch((err) => res.status(500).json(err));
    },
    updateCard(req, res) {
        card.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
            .then((card) => !card
                ? res.status(404).json({ message: `No card with matching ID found.`})
                : res.json(card))
            .catch((err) => res.status(500).json(err))
    },
    deleteCard(req, res) {
        card.findOneAndDelete({ _id: req.params.cardId})
            .then((card) =>
                !card
                    ? res.status(404).json({message: `No card with matching ID found.`})
                    : res.json({ message: `Card deleted succesfully.`}))
            .catch((err) => res.status(500).json(err))
    }
}