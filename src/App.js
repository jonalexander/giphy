import React, { Component } from 'react';
import './App.css';


const Store = [
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  },
  {
    "type": "gif",
    "id": "64zSh1uTE7xxm",
    "slug": "cat-funny-64zSh1uTE7xxm",
    "url": "http://giphy.com/gifs/cat-funny-64zSh1uTE7xxm",
    "bitly_gif_url": "http://gph.is/1sGq99P",
    "bitly_url": "http://gph.is/1sGq99P",
    "embed_url": "http://giphy.com/embed/64zSh1uTE7xxm",
    "username": "",
    "source": "http://wifflegif.com",
    "rating": "g",
    "content_url": "",
    "source_tld": "wifflegif.com",
    "source_post_url": "http://wifflegif.com",
    "is_indexable": 0,
    "import_datetime": "2016-06-15 15:11:49",
    "trending_datetime": "1970-01-01 00:00:00",
    "images": {
      "fixed_height": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.gif",
        "width": "356",
        "height": "200",
        "size": "2251285",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200.mp4",
        "mp4_size": "155782",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200.webp",
        "webp_size": "1053250"
      },
      "fixed_height_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_s.gif",
        "width": "356",
        "height": "200"
      },
      "fixed_height_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200_d.gif",
        "width": "356",
        "height": "200",
        "size": "223111",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200_d.webp",
        "webp_size": "102944"
      },
      "fixed_width": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.gif",
        "width": "200",
        "height": "113",
        "size": "785703",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w.mp4",
        "mp4_size": "68626",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w.webp",
        "webp_size": "438106"
      },
      "fixed_width_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_s.gif",
        "width": "200",
        "height": "113"
      },
      "fixed_width_downsampled": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.gif",
        "width": "200",
        "height": "113",
        "size": "79208",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/200w_d.webp",
        "webp_size": "42520"
      },
      "fixed_height_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100.gif",
        "width": "178",
        "height": "100",
        "size": "638133",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.mp4",
        "mp4_size": "64103",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100.webp",
        "webp_size": "372016"
      },
      "fixed_height_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100_s.gif",
        "width": "178",
        "height": "100"
      },
      "fixed_width_small": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w.gif",
        "width": "100",
        "height": "56",
        "size": "227617",
        "mp4": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.mp4",
        "mp4_size": "32032",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/100w.webp",
        "webp_size": "153452"
      },
      "fixed_width_small_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/100w_s.gif",
        "width": "100",
        "height": "56"
      },
      "downsized": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "downsized_large": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "downsized_medium": {
        "url": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423"
      },
      "original": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.gif",
        "width": "320",
        "height": "180",
        "size": "1957423",
        "frames": "62",
        "mp4": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy.mp4",
        "mp4_size": "289048",
        "webp": "http://media1.giphy.com/media/64zSh1uTE7xxm/giphy.webp",
        "webp_size": "990738"
      },
      "original_still": {
        "url": "https://media1.giphy.com/media/64zSh1uTE7xxm/giphy_s.gif",
        "width": "320",
        "height": "180"
      },
      "looping": {
        "mp4": "https://media.giphy.com/media/64zSh1uTE7xxm/giphy-loop.mp4"
      }
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {results: null}
  }

  executeSearch(query) {
    var cleanQuery = query.replace(' ', '+')

    fetch(`http://api.giphy.com/v1/gifs/search?q=${cleanQuery}&api_key=dc6zaTOxFJmzC`)
      .then( (response) => {return response.json()} )
      .then( (jsObject) => {alert('last line of executeSearch!'); this.successFunction(jsObject) } )
  }

  successFunction(results) {
    //console.log(someData.data)
    this.setState( {results: results.data} )
  }

  handleSearch(query, event) {
    //alert('handleSEARCH')
    event.preventDefault()
    this.executeSearch(query)
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)}/>
        <Grid results={this.state.results} />
      </div>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {query: ""}
  }

  handleChange(event) {
    //console.log(this.state.query)
    this.setState( {query: event.target.value} )
  }

  handleClick(event) {
    event.preventDefault()
  }


  render() {
    return (
      <form>
        <input className="search-bar"
          onChange={this.handleChange.bind(this)}
          type="text"
          placeholder="..."
          />
        <input className="search-bar"
          type="submit"
          onClick={this.props.handleSearch.bind(null, this.state.query)}
          />
      </form>
    )
  }
}

class Grid extends Component {
  render(){
    var counter = 0
    var results = this.props.results ? this.props.results : Store
    var arrayRows = [results.slice(0, 4), results.slice(4, 8), results.slice(8, 12), results.slice(12, 16), results.slice(16, 20)]

    return (
      <table>
        <tbody>
        {
          arrayRows.map( (arrayRow) => {
            return <TableRow data={arrayRow} key={counter++}/>
            } )
        }
        </tbody>
      </table>
    )
  }
}

class TableRow extends Component {
  render() {
    var counter = 0

    return (
      <tr>
        { this.props.data.map( (cell) => {
          return <TableCell data={cell} key={counter++} />
          })
        }
      </tr>
    )
  }
}

class TableCell extends Component {
  render() {
    var counter = 0
    return (
      <td>
        <GiphyObject data={this.props.data}
          key={counter++}
          />
      </td>
    )
  }
}

class GiphyObject extends Component {
    constructor(props) {
      super(props)
      this.state = {hover: false}
    }

    toggleHoverState() {
      this.setState( {hover: !this.state.hover} )
    }

    render() {
      var imgSrc=this.state.hover === true ? this.props.data['images']['downsized']['url'] : this.props.data['images']['fixed_width_still']['url']

      return (
        <img src={imgSrc}
          alt=""
          onMouseOver={this.toggleHoverState.bind(this)}
          onMouseOut={this.toggleHoverState.bind(this)}
          />
      )
    }
}

export default App;
