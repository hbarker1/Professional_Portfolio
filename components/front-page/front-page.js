function FrontPageController(recipeService) {
    const ctrl = this;
}

  angular
    .module('Portfolio')
    .component('front-page', {
      template: `
      <header>
        <div>
           <img src ="http://www.aqusagtechnologies.com/wp-content/uploads/2017/11/Web-design.jpg">
           <button>Welcome</button>
            
        </div>
        
        </header>
      
    `, // or use templateUrl
      controller: FrontPageController,
      // bindings: {
      //   me: '<',
      //   onDelete: '&',
      //   onUpdate: '&'
      // }
    });