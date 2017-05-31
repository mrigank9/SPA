//MODULE
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.config(function($sceProvider) {
    $sceProvider.enabled(false)
});
