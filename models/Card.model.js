const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  object: String,
  id: String,
  oracle_id: String,
  multiverse_ids: [Number],
  mtgo_id: Number,
  arena_id: Number,
  tcgplayer_id: Number,
  cardmarket_id: Number,
  name: String,
  lang: String,
  released_at: Date,
  uri: String,
  scryfall_uri: String,
  layout: String,
  highres_image: Boolean,
  image_status: String,
  image_uris: {
    small: String,
    normal: String,
    large: String,
    png: String,
    art_crop: String,
    border_crop: String,
  },
  mana_cost: String,
  cmc: Number,
  type_line: String,
  color_identity: [String],
  keywords: [String],
  card_faces: [
    {
      object: String,
      name: String,
      mana_cost: String,
      type_line: String,
      oracle_text: String,
      colors: [String],
      power: String,
      toughness: String,
      flavor_text: String,
      artist: String,
      artist_id: String,
      illustration_id: String,
      image_uris: {
        small: String,
        normal: String,
        large: String,
        png: String,
        art_crop: String,
        border_crop: String,
      },
    },
  ],
  all_parts: [
    {
      object: String,
      id: String,
      component: String,
      name: String,
      type_line: String,
      uri: String,
    },
  ],
  legalities: {
    standard: String,
    future: String,
    historic: String,
    timeless: String,
    gladiator: String,
    pioneer: String,
    explorer: String,
    modern: String,
    legacy: String,
    pauper: String,
    vintage: String,
    penny: String,
    commander: String,
    oathbreaker: String,
    standardbrawl: String,
    brawl: String,
    alchemy: String,
    paupercommander: String,
    duel: String,
    oldschool: String,
    premodern: String,
    predh: String,
  },
  games: [String],
  reserved: Boolean,
  foil: Boolean,
  nonfoil: Boolean,
  finishes: [String],
  oversized: Boolean,
  promo: Boolean,
  reprint: Boolean,
  variation: Boolean,
  set_id: String,
  set: String,
  set_name: String,
  set_type: String,
  set_uri: String,
  set_search_uri: String,
  scryfall_set_uri: String,
  rulings_uri: String,
  prints_search_uri: String,
  collector_number: String,
  digital: Boolean,
  rarity: String,
  artist: String,
  artist_ids: [String],
  border_color: String,
  frame: String,
  frame_effects: [String],
  security_stamp: String,
  full_art: Boolean,
  textless: Boolean,
  booster: Boolean,
  story_spotlight: Boolean,
  edhrec_rank: Number,
  preview: {
    source: String,
    source_uri: String,
    previewed_at: Date,
  },
  prices: {
    usd: String,
    usd_foil: String,
    usd_etched: String,
    eur: String,
    eur_foil: String,
    tix: String,
  },
  related_uris: {
    gatherer: String,
    tcgplayer_infinite_articles: String,
    tcgplayer_infinite_decks: String,
    edhrec: String,
  },
  purchase_uris: {
    tcgplayer: String,
    cardmarket: String,
    cardhoarder: String,
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
