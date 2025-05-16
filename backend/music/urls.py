from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SongViewSet, AlbumViewSet, MusicVideoViewSet

router = DefaultRouter()
router.register(r'songs', SongViewSet)
router.register(r'albums', AlbumViewSet)
router.register(r'videos', MusicVideoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]