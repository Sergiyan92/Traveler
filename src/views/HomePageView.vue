<script setup>
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '../map/settings'
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import { computed, onMounted, ref } from 'vue'
import { addFavoritePlace, getFavoritePlaces } from '@/api/favorite-places'
import { useModal } from '../composables/useModal'
import CreateNewPlaceModal from '../components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
import { useMutation } from '@/composables/useMutation'
import UserInfo from '../components/UserInfo/UserInfo.vue'

const mapMarkerLngLat = ref(null)
const activeId = ref(null)
const map = ref(null)

const { isOpen, openModal, closeModal } = useModal()

const {
  data,
  mutation: getPlaces,
  isLoading: isLoadingPlace
} = useMutation({
  mutationFn: () => getFavoritePlaces()
})

const favoritePlaces = computed(() => data.value ?? [])

const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error
} = useMutation({
  mutationFn: (newPlaceData) => addFavoritePlace(newPlaceData),
  onSuccess: () => {
    closeModal()
    mapMarkerLngLat.value = null
    getPlaces()
  }
})

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { coordinates } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: coordinates })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const handleAddPlace = async (formData, resetForm) => {
  const body = {
    ...formData,
    coordinates: mapMarkerLngLat.value
  }

  await addPlace(body)
  resetForm()
}

onMounted(() => {
  getPlaces()
})
</script>

<template>
  <main class="flex flex-col md:flex-row h-screen">
    <div class="bg-white h-full w-full md:w-[400px] shrink-0 overflow-auto pb-10">
      <UserInfo />
      <div v-if="isLoadingPlace" class="text-black px-6">Loading...</div>
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        :is-places-loading="isLoadingPlace"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />

      <CreateNewPlaceModal
        :is-loading="isAddingPlace"
        :has-error="error"
        :is-open="isOpen"
        @close="closeModal"
        @submit="handleAddPlace"
      />
    </div>
    <div class="w-full h-full md:h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="h-8 w-8" is-active />
        </MapboxMarker>
        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <button @click.stop="changeActiveId(place.id)">
            <MarkerIcon class="h-8 w-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 767px) {
  .w-full {
    width: 100%;
  }

  .h-full {
    height: 50vh;
  }
}
</style>
