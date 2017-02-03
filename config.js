const path = {
  dist: './build'
};

const header = {
  bootstarp: {
    version: 'Bootstrap v3.3.7 (http://getbootstrap.com)',
    description: 'Copyright 2011-2016 Twitter, Inc.',
    license: 'Licensed under the MIT license'
  }
};

const browsers = [
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 20",
  "Firefox >= 24",
  "Explorer >= 8",
  "iOS >= 6",
  "Opera >= 12",
  "Safari >= 6"
]

const config = { path, header, browsers };

module.exports = config;
