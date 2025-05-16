from django.contrib import admin
from .models import Song, Album, MusicVideo

@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'album', 'created_at')

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'release_date')

@admin.register(MusicVideo)
class MusicVideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'song', 'uploaded_at')