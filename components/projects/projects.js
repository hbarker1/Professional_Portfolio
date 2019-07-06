function ProjectsController(recipeService) {
    const ctrl = this;
}

  angular
    .module('Portfolio')
    .component('Projects', {
      template: `
      Hello
    `, // or use templateUrl
      controller: ProjectsController,
      // bindings: {
      //   me: '<',
      //   onDelete: '&',
      //   onUpdate: '&'
      // }
    });