var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'http://google.com.br',
        nicknames: ['nickname1','nickname2','nickname3','nickname4',]
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'http://google.com.br',
        nicknames: ['nickname1','nickname2','nickname3','nickname4',]
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'http://google.com.br',
        nicknames: ['nickname1','nickname2','nickname3','nickname4',]
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'http://google.com.br',
        nicknames: ['nickname1','nickname2','nickname3','nickname4',]
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'http://google.com.br',
        nicknames: ['nickname1','nickname2','nickname3','nickname4',]
    }

];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function () {
        var title = '';
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 20) {
            title = 'Infant';
        } else if (clicks < 30) {
            title = 'Teen';
        } else if (clicks < 40) {
            title = 'Mature'
        } else if (clicks < 50) {
            title = 'Veteran';
        } else {
            title = 'Old'
        }
        return title;
    }, this);
}

var ViewModel = function () {
    var self = this;

    self.catList = [];

    initialCats.forEach(function (e) {
        self.catList.push(new Cat(e));
    });

    self.currentCat = ko.observable(self.catList[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };
}

ko.applyBindings(new ViewModel());