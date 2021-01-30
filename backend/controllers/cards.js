const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/forbiddenError');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((card) => res.send(card))
    .catch((err) => res.status(500).send({ message: `На сервере произошла ошибка: ${err.message}` }));
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params._id)
    .orFail()
    .catch(() => {
      throw new NotFoundError({ message: 'Нет карточки с таким id' });
    })
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        throw new ForbiddenError({ message: 'Недостаточно прав для выполнения операции' });
      }
      Card.findByIdAndDelete(req.params._id)
        .then((cardData) => {
          res.send(cardData);
        })
        .catch(next);
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then((foundedCard) => {
      if (!foundedCard) {
        throw new NotFoundError('Нет карточки с таким id');
      }

      if (JSON.stringify(foundedCard.owner) !== JSON.stringify(req.user._id)) {
        throw new ForbiddenError('Недостаточно прав для выполнения операции');
      }

      Card.deleteOne(req.params.id)
        .then((removedCard) => res.send(removedCard));
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch(() => {
      throw new NotFoundError({ message: 'Нет карточки с таким id' });
    })
    .then((likes) => res.send(likes))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .orFail()
    .catch(() => {
      throw new NotFoundError({ message: 'Нет карточки с таким id' });
    })
    .then((likes) => res.send(likes))
    .catch(next);
};
