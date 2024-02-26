import sys
from pathlib import Path

# Get the parent directory of the current script
parent_dir = str(Path(__file__).resolve().parent.parent)
# Add the parent directory to the sys.path
sys.path.append(parent_dir)


import tkinter as tk
import customtkinter as ctk 

from PIL import ImageTk
from authtoken import auth_token

import torch
from torch import autocast
from diffusers import StableDiffusionPipeline 

modelid = "CompVis/stable-diffusion-v1-4"
device = "cuda"
pipe = StableDiffusionPipeline.from_pretrained(modelid, revision="fp16", torch_dtype=torch.float16, use_auth_token=auth_token) 
pipe.to(device) 

# prompts = []

# Read prompts from text files
prompts = [""]
for i in range(0):
    prompt_path = f'../prompts/prompt_{i}.txt'
    with open(prompt_path, 'r', encoding='utf-8') as file:
        prompt = file.read().strip()  # Read and strip any extra whitespace
        prompts.append(prompt)

print(prompts)


# images = []


# for i, prompt in enumerate(prompts):
#     print('Allocated:', round(torch.cuda.memory_allocated(0)/1024**3,1), 'GB')
#     image = pipe(prompt).images[0]  
#     image.save('images/picture_8.jpg')
#     # images.append(image)
#     print('Allocated:', round(torch.cuda.memory_allocated(0)/1024**3,1), 'GB')

images = []
for i, prompt in enumerate(prompts):
    image = pipe(prompt).images[0] # Assuming pipe(prompt) returns a dictionary with the key "sample"
    output_path = f'../images/model1/picture_{i+13}.jpg'
    image.save(output_path)
    images.append(image)