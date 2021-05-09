(function() {
var exports = {};
exports.id = "pages/api/getUser";
exports.ids = ["pages/api/getUser"];
exports.modules = {

/***/ "./pages/api/getUser.js":
/*!******************************!*\
  !*** ./pages/api/getUser.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getUser */ "./utils/getUser.js");


const apiGetUser = async (req, res) => {
  const data = await (0,_utils_getUser__WEBPACK_IMPORTED_MODULE_0__.default)('erlonlon');
  res.send(data);
};

/* harmony default export */ __webpack_exports__["default"] = (apiGetUser);

/***/ }),

/***/ "./utils/getUser.js":
/*!**************************!*\
  !*** ./utils/getUser.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getUser = async userName => {
  const resUser = await fetch('https://api.github.com/users/' + userName);
  const user = await resUser.json();
  const resRepos = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated`);
  const originalRepos = await resRepos.json();
  const dontShowRepos = ['erlonlon/pousadaparaiso', 'erlonlon/blog', 'erlonlon/erro', 'erlonlon/t', 'erlonlon/teste01', 'erlonlon/jocelio', 'erlonlon/cv', 'erlonlon/umdigito', 'erlonlon/eboxbrasil', 'erlonlon/xote7', 'erlonlon/estudo_android', 'erlonlon/git'];

  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1;

  const extractRepos = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  });

  const repos = originalRepos.filter(dontShowFilter).map(extractRepos);
  return {
    repos,
    user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getUser);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/getUser.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lcmxvbi1yZXN1bWUtYXBpLy4vcGFnZXMvYXBpL2dldFVzZXIuanMiLCJ3ZWJwYWNrOi8vZXJsb24tcmVzdW1lLWFwaS8uL3V0aWxzL2dldFVzZXIuanMiXSwibmFtZXMiOlsiYXBpR2V0VXNlciIsInJlcSIsInJlcyIsImRhdGEiLCJnZXRVc2VyIiwic2VuZCIsInVzZXJOYW1lIiwicmVzVXNlciIsImZldGNoIiwidXNlciIsImpzb24iLCJyZXNSZXBvcyIsIm9yaWdpbmFsUmVwb3MiLCJkb250U2hvd1JlcG9zIiwiZG9udFNob3dGaWx0ZXIiLCJyZXBvIiwiaW5kZXhPZiIsImZ1bGxfbmFtZSIsImV4dHJhY3RSZXBvcyIsImlkIiwibGFuZ3VhZ2UiLCJzdGFyZ2F6ZXJzX2NvdW50IiwicmVwb3MiLCJmaWx0ZXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLE1BQU1BLFVBQVUsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFFckMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLHVEQUFPLENBQUMsVUFBRCxDQUExQjtBQUNBRixLQUFHLENBQUNHLElBQUosQ0FBU0YsSUFBVDtBQUNELENBSkQ7O0FBTUEsK0RBQWVILFVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEEsTUFBTUksT0FBTyxHQUFHLE1BQU9FLFFBQVAsSUFBb0I7QUFFbEMsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxrQ0FBa0NGLFFBQW5DLENBQTNCO0FBQ0EsUUFBTUcsSUFBSSxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csSUFBUixFQUFuQjtBQUVBLFFBQU1DLFFBQVEsR0FBRyxNQUFNSCxLQUFLLENBQUUsZ0NBQStCRixRQUFTLHFCQUExQyxDQUE1QjtBQUNBLFFBQU1NLGFBQWEsR0FBRyxNQUFNRCxRQUFRLENBQUNELElBQVQsRUFBNUI7QUFFQSxRQUFNRyxhQUFhLEdBQUcsQ0FDcEIseUJBRG9CLEVBRXBCLGVBRm9CLEVBR3BCLGVBSG9CLEVBSXBCLFlBSm9CLEVBS3BCLGtCQUxvQixFQU1wQixrQkFOb0IsRUFPcEIsYUFQb0IsRUFRcEIsbUJBUm9CLEVBU3BCLHFCQVRvQixFQVVwQixnQkFWb0IsRUFXcEIseUJBWG9CLEVBWXBCLGNBWm9CLENBQXRCOztBQWNBLFFBQU1DLGNBQWMsR0FBR0MsSUFBSSxJQUFJRixhQUFhLENBQUNHLE9BQWQsQ0FBc0JELElBQUksQ0FBQ0UsU0FBM0IsTUFBMEMsQ0FBQyxDQUExRTs7QUFDQSxRQUFNQyxZQUFZLEdBQUdILElBQUksS0FBSztBQUM1QkksTUFBRSxFQUFFSixJQUFJLENBQUNJLEVBRG1CO0FBRTVCRixhQUFTLEVBQUVGLElBQUksQ0FBQ0UsU0FGWTtBQUc1QkcsWUFBUSxFQUFFTCxJQUFJLENBQUNLLFFBSGE7QUFJNUJDLG9CQUFnQixFQUFFTixJQUFJLENBQUNNO0FBSkssR0FBTCxDQUF6Qjs7QUFNQSxRQUFNQyxLQUFLLEdBQUdWLGFBQWEsQ0FBQ1csTUFBZCxDQUFxQlQsY0FBckIsRUFBcUNVLEdBQXJDLENBQXlDTixZQUF6QyxDQUFkO0FBRUEsU0FBTztBQUNMSSxTQURLO0FBQ0ViO0FBREYsR0FBUDtBQUtELENBcENEOztBQXFDQSwrREFBZUwsT0FBZixFIiwiZmlsZSI6InBhZ2VzL2FwaS9nZXRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFVzZXIgZnJvbSAnLi4vLi4vdXRpbHMvZ2V0VXNlcidcclxuY29uc3QgYXBpR2V0VXNlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VXNlcignZXJsb25sb24nKVxyXG4gIHJlcy5zZW5kKGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaUdldFVzZXIiLCJjb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXJOYW1lKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlc1VzZXIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8nICsgdXNlck5hbWUpXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlc1VzZXIuanNvbigpXHJcblxyXG4gIGNvbnN0IHJlc1JlcG9zID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyTmFtZX0vcmVwb3M/c29ydD11cGRhdGVkYClcclxuICBjb25zdCBvcmlnaW5hbFJlcG9zID0gYXdhaXQgcmVzUmVwb3MuanNvbigpXHJcblxyXG4gIGNvbnN0IGRvbnRTaG93UmVwb3MgPSBbXHJcbiAgICAnZXJsb25sb24vcG91c2FkYXBhcmFpc28nLFxyXG4gICAgJ2VybG9ubG9uL2Jsb2cnLFxyXG4gICAgJ2VybG9ubG9uL2Vycm8nLFxyXG4gICAgJ2VybG9ubG9uL3QnLFxyXG4gICAgJ2VybG9ubG9uL3Rlc3RlMDEnLFxyXG4gICAgJ2VybG9ubG9uL2pvY2VsaW8nLFxyXG4gICAgJ2VybG9ubG9uL2N2JyxcclxuICAgICdlcmxvbmxvbi91bWRpZ2l0bycsXHJcbiAgICAnZXJsb25sb24vZWJveGJyYXNpbCcsXHJcbiAgICAnZXJsb25sb24veG90ZTcnLFxyXG4gICAgJ2VybG9ubG9uL2VzdHVkb19hbmRyb2lkJyxcclxuICAgICdlcmxvbmxvbi9naXQnXHJcbiAgXVxyXG4gIGNvbnN0IGRvbnRTaG93RmlsdGVyID0gcmVwbyA9PiBkb250U2hvd1JlcG9zLmluZGV4T2YocmVwby5mdWxsX25hbWUpID09PSAtMVxyXG4gIGNvbnN0IGV4dHJhY3RSZXBvcyA9IHJlcG8gPT4gKHtcclxuICAgIGlkOiByZXBvLmlkLFxyXG4gICAgZnVsbF9uYW1lOiByZXBvLmZ1bGxfbmFtZSxcclxuICAgIGxhbmd1YWdlOiByZXBvLmxhbmd1YWdlLFxyXG4gICAgc3RhcmdhemVyc19jb3VudDogcmVwby5zdGFyZ2F6ZXJzX2NvdW50XHJcbiAgfSlcclxuICBjb25zdCByZXBvcyA9IG9yaWdpbmFsUmVwb3MuZmlsdGVyKGRvbnRTaG93RmlsdGVyKS5tYXAoZXh0cmFjdFJlcG9zKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVwb3MsIHVzZXJcclxuICB9XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==