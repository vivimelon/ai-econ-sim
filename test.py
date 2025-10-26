import pygame
from sys import exit

pygame.init()
screen = pygame.display.set_mode((800,480))
pygame.display.set_caption('swarmlets')
clock = pygame.time.Clock()

ground_surface = pygame.image.load('assets/grass.png')

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
           pygame.quit()
           exit() 

    screen.blit(test_surface,(0,0))               
    pygame.display.update()
    clock.tick(60)