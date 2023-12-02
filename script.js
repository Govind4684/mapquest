L.mapquest.key = 'Your_Key';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [12.962935, 77.7123],
  layers: L.mapquest.tileLayer('hybrid'),
  zoom: 16
});

map.addControl(L.mapquest.control( { position: "bottomright" } ));

let searchControl = L.mapquest.searchControl({
    className: '',
    hoverMarker: {
      icon: 'marker',
      iconOptions: {
        size: 'sm',
        primaryColor: '#333333',
        secondaryColor: '#333333'
      }
    },
    search: {
      sort: 'relevance',
      pageSize: 20
    },
    searchInput: {
      searchAheadOptions: {
        limit: 6,
        collection: 'address,adminArea,airport,poi,category,franchise'
      },
      compactResults: true,
      placeholderText: 'Search',
      clearTitle: 'Clear search'
    },
    searchLayer: {
      buffer: 256,
      collisionMargin: 2,
      marker: {
        icon: 'via',
        iconOptions: {
          primaryColor: '#ffffff',
          secondaryColor: '#333333',
          size: 'lg'
        },
        popupEnabled: true
      },
      paddingTopLeft: [420, 20],
      paddingBottomRight: [20, 20],
      searchResponse: {},
      updateResultsOnMapMove: true
    }
  }).addTo(map);

  L.marker([12.960842, 77.716141], {
    icon: L.mapquest.icons.marker({
      primaryColor: "#e23f3f",
      secondaryColor: "#ffffff",
      shadow: true,
      size: "md",
      symbol: "I",
    }),
  })
    .bindPopup("This is Kapoor's Chat")
    .addTo(map);
