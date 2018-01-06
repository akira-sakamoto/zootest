// This is a JavaScript file

/**
 * @fileOverview zoomaniaコントローラ
 * @author akira.sakamoto@gmail.com
 */

(function() {
  /**
   * @private {object} _zooData    読み込んだ動物データを保持する
   */
  var _zooData = [];

  ons.bootstrap()
  /**
   * メインコントローラ
   */
  .controller('AppController', function($http) {
    console.log('AppController <<');
    $http.get('assets/zoodata.json')
    .success(function(data) {
      _zooData = data;
      console.log('load zooData.json success');
    })
    .error(function(data, status, headers, config) {
      console.error('ERROR: ' + status);
    });
    console.log('AppController >>');
  })

  /**
   * 無限動物リスト
   */
  .controller('AnimalListController', function($scope) {
    console.log('AnimalListController <<');
    $scope.items = _zooData;
    this.delegate = {
      configureItemScope: function(index, itemScope) {
        var animal = _zooData[index];
        if (!angular.isUndefined(animal)) {
          itemScope.animal = animal;
          itemScope.thumbnail = animal.thumbnail;
          itemScope.jpName = animal.jpName;
        }
      },
      countItems: function() {
        return _zooData.length;
      },
      calculateItemHeight: function() {
        return ons.platform.isAndroid() ? 48 : 44;
      }
    };
    console.log('AnimalListController >>');
  })

  /**
   * 動物詳細データ
   */
  .controller('AnimalDetailController', function($scope) {
    console.log('AnimalDetailController <<');
    
    var animal = navi.topPage.data.animal;
    $scope.jpName = animal.jpName;
    $scope.urlPhoto = animal.urlPhoto[0];
    $scope.enName = animal.enName;
    $scope.zlName = animal.zlName;
    $scope.class = animal.class;
    $scope.order = animal.order;
    $scope.family = animal.family;
    $scope.urlWiki = animal.urlWiki;
    $scope.description = animal.description;

    console.log('AnimalDetailController >>');
  })
  /**
   * 園内マップ
   */
  .controller('MapController', function($scope, $element) {
    console.log('MapController <<');
    createImageView({id:'mapImage', x:0, y:0});
    $scope.on('touchmove', function(event) {
      event.preventDefault();
    });
    
    function createImageView(params) {
      var view = {
        
      }
    }
    console.log('MapController >>');
  });

  ons.ready(function() {
    console.log("Onsen UI is ready!");
  });

})();



