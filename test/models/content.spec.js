/*global Stem, describe, it  */

describe('Content Model', function () {

    'use strict';

    it('should provide the correct API for a full content profile', function() {
        var ContentModel = new Stem.Models.Content({id: 'c:si:QkWTIFXev'});
        ContentModel.url().should.equal(
            Stem.config.oae.protocol + '//' +
            Stem.config.oae.host +
            '/api/content/c:si:QkWTIFXev'
        );
    });

    it('should parse grade levels from the displayName', function() {
        new Stem.Models.Content({displayName: 'Title - elementary - math'}, {parse: true}).get('elementary').should.be.true();
        new Stem.Models.Content({displayName: 'Title - elementary - math'}, {parse: true}).get('middle').should.be.false();
        new Stem.Models.Content({displayName: 'Title - elementary - math'}, {parse: true}).get('high').should.be.false();
        new Stem.Models.Content({displayName: 'Title - elementary, high - math'}, {parse: true}).get('primary').should.be.false();
        new Stem.Models.Content({displayName: 'Title - elementary, high - math'}, {parse: true}).get('elementary').should.be.true();
        new Stem.Models.Content({displayName: 'Title - elementary, high - math'}, {parse: true}).get('middle').should.be.false();
        new Stem.Models.Content({displayName: 'Title - elementary, high - math'}, {parse: true}).get('high').should.be.true();
        new Stem.Models.Content({displayName: 'Title -  - math'}, {parse: true}).get('primary').should.be.true();
        new Stem.Models.Content({displayName: 'Title -  - math'}, {parse: true}).get('elementary').should.be.true();
        new Stem.Models.Content({displayName: 'Title -  - math'}, {parse: true}).get('middle').should.be.true();
        new Stem.Models.Content({displayName: 'Title -  - math'}, {parse: true}).get('high').should.be.true();
    });

    it('should parse grade levels abbreviations', function() {
        new Stem.Models.Content({displayName: 'Title - K-2 - math'}, {parse: true}).get('primary').should.be.true();
        new Stem.Models.Content({displayName: 'Title - K-2 - math'}, {parse: true}).get('elementary').should.be.false();
        new Stem.Models.Content({displayName: 'Title - 3-5 - math'}, {parse: true}).get('primary').should.be.false();
        new Stem.Models.Content({displayName: 'Title - 3-5 - math'}, {parse: true}).get('elementary').should.be.true();
        new Stem.Models.Content({displayName: 'Title - 6-8 - math'}, {parse: true}).get('middle').should.be.true();
        new Stem.Models.Content({displayName: 'Title - 9-12 - math'}, {parse: true}).get('high').should.be.true();
    });

    it('should parse subjects from the displayName', function() {
        new Stem.Models.Content({displayName: 'Title - elementary - Math'}, {parse: true}).get('tags').should.include('Math');
        new Stem.Models.Content({displayName: 'Title -  - Math, Science'}, {parse: true}).get('tags').should.include('Math');
        new Stem.Models.Content({displayName: 'Title -  - Math, Science'}, {parse: true}).get('tags').should.include('Science');
    });

});
