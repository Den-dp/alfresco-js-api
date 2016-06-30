/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');

describe('Alfresco Content', function () {

    beforeEach(function (done) {
        this.authResponseMock = new AuthResponseMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: 'http://192.168.99.100:8080'
        });

        this.alfrescoJsApi.login().then((data) => {
            done();
        });
    });

    it('get Document Thumbnail Url', function () {
        var thumbnailUrl = this.alfrescoJsApi.content.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

        expect(thumbnailUrl).to.be.equal('http://192.168.99.100:8080/alfresco/api/-default-/public/alfresco/versions/1/nodes/' +
            '1a0b110f-1e09-4ca2-b367-fe25e4964a4/renditions/doclib/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('get Content Url', function () {
        var contentUrl = this.alfrescoJsApi.content.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

        expect(contentUrl).to.be.equal('http://192.168.99.100:8080/alfresco/api/-default-/public/alfresco/versions/1/nodes/' +
            '1a0b110f-1e09-4ca2-b367-fe25e4964a4/content?attachment=false' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });
});
