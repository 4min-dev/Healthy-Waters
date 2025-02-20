import isMobileDevice from "./isMobileDevice.js"

ymaps.ready(init)

function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.753960, 37.620393],
        zoom: 10,
        controls: ['zoomControl', 'searchControl']
    })

    if(isMobileDevice()) {
        myMap.controls.remove('searchControl')
        myMap.controls.remove('zoomControl')
    }

    const searchControl = myMap.controls.get('searchControl')
    searchControl.options.set({
        provider: 'yandex#search',
        float: 'left',
        noPlacemark: false,
        results: 5,
        noResultsPanel: true
    })
}