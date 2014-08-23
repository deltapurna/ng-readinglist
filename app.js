(function(){
  'use strict';

  var app = angular.module('readingList', [])
    .controller('readingListController', function(){
      this.books = books;
    });

  var books = [
    {
      title: 'Pragmatic Thinking and Learning',
      authors: ['Andy Hunt'],
      isbn: '1934356050',
      review: 'undefined',
      rating: 'undefined',
      genres: ['non-fiction']
    },
    {
      title: 'The Age of Spiritual Machines',
      authors: ['Ray Kurzweil'],
      isbn: '0140282025',
      review: 'undefined',
      rating: 'undefined',
      genres: ['non-fiction']
    },
    {
      title: 'Elven Star: The Death Gate Cycle',
      authors: ['Margaret Weiss', 'Tracy Hickman'],
      isbn: '0553290983',
      review: 'undefined',
      rating: 'undefined',
      genres: ['fiction', 'fantasy']
    }
  ];
})();
