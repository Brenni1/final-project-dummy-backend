// const express = require("express");
// const router = express.router;
const router = require("express").Router();

const UserModel = require("../models/User.model.js");
const DeckModel = require("../models/Deck.model.js");
const CardModel = require("../models/Card.model.js");
const { isAuthenticated } = require("../middleware/jwt.middleware");

// create a new User

router.post("/", (req, res) => {
  UserModel.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a User

router.delete("/:userId", (req, res) => {
  UserModel.findByIdAndDelete(req.params.userId)
    .then((deletedUser) => {
      console.log(req.params.userId);
      if (!deletedUser) {
        res.status(500).json({ message: "Something bad happened while deleting user" });
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Something bad happened while deleting user", error });
    });
});

// check if the User is authenticated and exists
router.get("/:id", isAuthenticated, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({ message: "User found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

/////// DECK ROUTES FROM HERE //////////

// create a new Deck

router.post("/deck", (req, res) => {
  DeckModel.create(req.body)
    .then((newDeck) => {
      res.status(201).json(newDeck);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get the deck of a User and populate it with the Cards

router.get("/deck/:deckId", (req, res) => {
  console.log("This is the reqparams", req.params.deckId);
  DeckModel.findById(req.params.deckId)
    .populate("cards")
    .then((oneDeckModel) => {
      console.log(oneDeckModel, req.params.deckId);
      res.status(200).json(oneDeckModel);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error while finding the Deck", error });
      console.log(error);
    });
});

// update a Deck

router.put("/deck/:deckId", async (req, res) => {
  const { deckId } = req.params;
  try {
    const updatedDeck = await DeckModel.findByIdAndUpdate(deckId, req.body, {
      new: true,
    });
    if (!updatedDeck) {
      res.status(500).json({ errorMessage: "Deck not found" });
    } else {
      res.status(200).json({ message: "Deck updated successfully", updatedDeck });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Deck not found", error });
  }
});

// updating a User

router.put("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(500).json({ errorMessage: "User not found" });
    } else {
      res.status(200).json({ message: "User updated successfully", updatedUser });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "User not found", error });
  }
});

// deleting a Deck

router.delete("/deck/:deckId", (req, res) => {
  DeckModel.findByIdAndDelete(req.params.deckId)
    .then((deletedDeck) => {
      console.log(req.params.deckId);
      if (!deletedDeck) {
        res.status(500).json({ message: "Something bad happened while deleting the Deck" });
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Something bad happened while deleting the Deck", error });
    });
});

// create a new Card

router.post("/card", (req, res) => {
  CardModel.create(req.body)
    .then((newCard) => {
      res.status(201).json(newCard);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;