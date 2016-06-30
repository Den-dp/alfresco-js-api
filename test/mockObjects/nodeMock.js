'use strict';

var nock = require('nock');

class AuthResponseMock {

    constructor(config) {
        this.host = (config && config.host) ? config.host : 'http://192.168.99.100:8080';
    }

    get200ResponseChildren() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/b4cff62a-664d-4d45-9302-98723eac1319/children')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 5,
                        'hasMoreItems': false,
                        'totalItems': 5,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [{
                        'entry': {
                            'createdAt': '2011-02-15T20:19:00.007+0000',
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T20:19:00.007+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'dataLists',
                            'id': '64f69e69-f61e-42a3-8697-95eea1f2bda2',
                            'nodeType': 'cm:folder',
                            'parentId': 'b4cff62a-664d-4d45-9302-98723eac1319'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T22:04:54.290+0000',
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T22:04:54.290+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'discussions',
                            'id': '059c5bc7-2d38-4dc5-96b8-d09cd3c69b4c',
                            'nodeType': 'cm:folder',
                            'parentId': 'b4cff62a-664d-4d45-9302-98723eac1319'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T20:16:28.292+0000',
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2016-06-27T14:31:10.007+0000',
                            'modifiedByUser': {'id': 'admin', 'displayName': 'Administrator'},
                            'name': 'documentLibrary',
                            'id': '8f2105b4-daaf-4874-9e8a-2152569d109b',
                            'nodeType': 'cm:folder',
                            'parentId': 'b4cff62a-664d-4d45-9302-98723eac1319'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T20:18:59.808+0000',
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T20:18:59.808+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'links',
                            'id': '0e24b99c-41f0-43e1-a55e-fb9f50d73820',
                            'nodeType': 'cm:folder',
                            'parentId': 'b4cff62a-664d-4d45-9302-98723eac1319'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T21:46:01.603+0000',
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T21:46:01.603+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'wiki',
                            'id': 'cdefb3a9-8f55-4771-a9e3-06fa370250f6',
                            'nodeType': 'cm:folder',
                            'parentId': 'b4cff62a-664d-4d45-9302-98723eac1319'
                        }
                    }]
                }
            });

    }

    get200ResponseSingleFileFolder() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(200, {
                'entry': {
                    'isFile': true,
                    'createdByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                    'modifiedAt': '2011-03-03T10:34:52.139+0000',
                    'nodeType': 'cm:content',
                    'content': {
                        'mimeType': 'image/jpeg',
                        'mimeTypeName': 'JPEG Image',
                        'sizeInBytes': 145863,
                        'encoding': 'UTF-8'
                    },
                    'parentId': '880a0f47-31b1-4101-b20b-4d325e54e8b1',
                    'aspectNames': ['rn:renditioned', 'cm:ownable', 'cm:titled', 'cm:auditable', 'cm:author', 'exif:exif'],
                    'createdAt': '2011-03-03T10:34:52.139+0000',
                    'isFolder': false,
                    'modifiedByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                    'name': 'grass.jpg',
                    'id': '80a94ac8-3ece-47ad-864e-5d939424c47c',
                    'properties': {
                        'cm:title': 'grass.jpg',
                        'exif:orientation': 1,
                        'exif:xResolution': 72,
                        'exif:yResolution': 72,
                        'exif:focalLength': 23.42,
                        'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                        'exif:flash': true,
                        'exif:isoSpeedRatings': '100',
                        'exif:pixelXDimension': 1000,
                        'exif:model': 'HP PhotoSmart C850 (V05.27)',
                        'exif:fNumber': 3,
                        'exif:manufacturer': 'Hewlett-Packard',
                        'exif:exposureTime': 0.008,
                        'exif:pixelYDimension': 754,
                        'exif:resolutionUnit': 'Inch',
                        'exif:dateTimeOriginal': '2003-12-30T15:17:54.000+0000',
                        'exif:software': 'Adobe Photoshop CS5 Macintosh'
                    }
                }
            });
    }

    get404ChildrenNotExist() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/b4cff62a-664d-4d45-9302-98723eac1319/children')
            .reply(404, {
                'error': {
                    'errorKey': 'framework.exception.EntityNotFound',
                    'statusCode': 404,
                    'briefSummary': '05220073 The entity with id: 80a94ac4-3ec4-47ad-864e-5d939424c47c was not found',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    get404FileFolderNotExist() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac4-3ec4-47ad-864e-5d939424c47c')
            .reply(404, {
                'error': {
                    'errorKey': 'framework.exception.EntityNotFound',
                    'statusCode': 404,
                    'briefSummary': '05220073 The entity with id: 80a94ac4-3ec4-47ad-864e-5d939424c47c was not found',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    get204SuccessfullyDeleted() {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(204);
    }

    get403DeletePermissionDenied() {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(403);
    }

    get404DeleteNotFound() {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(404, {
                'error': {
                    'errorKey': 'framework.exception.EntityNotFound',
                    'statusCode': 404,
                    'briefSummary': '05230078 The entity with id: 80a94ac8-3ece-47ad-864e-5d939424c47c was not found',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    get404DeletePermanentlyNotFound() {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c?permanent=true')
            .reply(404, {
                'error': {
                    'errorKey': 'framework.exception.EntityNotFound',
                    'statusCode': 404,
                    'briefSummary': '05230078 The entity with id: 80a94ac8-3ece-47ad-864e-5d939424c47c was not found',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    rec() {
        nock.recorder.rec();
    }

    play() {
        nock.recorder.play();
    }
}

module.exports = AuthResponseMock;
