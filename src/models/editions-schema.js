module.exports = (db) =>
  db.model(
    "Editions",
    db.Schema({
      key: String,
      title: String,
      subtitle: String,
      authors: [{ type: Object, ref: "Authors" }],
      identifiers: {
        isbn_10: [String],
        isbn_13: [String],
        lccn: [String],
        oclc: [String],
        goodreads: [String],
        librarything: [String],
      },
      number_of_pages: Number,
      publishers: [String],
      publish_date: String,
      cover_i: Number,
      works: [{ key: String }],
      subjects: [String],
      ebook_access: String,
      ia_box_id: [String],
      languages: [{ key: String }],
      ocaid: String,
      source_records: [String],
      physical_format: String,
      edition_name: String,
      first_sentence: Object,
      weight: String,
      location: String,
      description: Object,
      covers: [Number],
      last_modified: {
        type: Date,
        default: Date.now,
      },
    })
  );
