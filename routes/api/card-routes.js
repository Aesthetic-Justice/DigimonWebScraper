const router = require('express').Router();
const {
    getCards,
    getCardbyID,
    createCard,
    updateCard,
    deleteCard
} = require(`../../controllers/dbController`);


router.route(`/`)
    .get(getCards);

router.route(`/:cardId`)
    .get(getCardbyID)
    .post(createCard)
    .put(updateCard)
    .delete(deleteCard)

module.exports = router;