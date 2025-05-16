from rest_framework import viewsets
from .models import Song, Album, MusicVideo
from .serializers import SongSerializer, AlbumSerializer, MusicVideoSerializer

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class MusicVideoViewSet(viewsets.ModelViewSet):
    queryset = MusicVideo.objects.all()
    serializer_class = MusicVideoSerializer