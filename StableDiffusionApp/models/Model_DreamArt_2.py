from diffusers import StableDiffusionPipeline
import torch

model_id = "dreamlike-art/dreamlike-photoreal-2.0"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")


# prompts = []

# Read prompts from text files
prompts = ["a student laughing in a classroom, hd, photorealisitc"]
for i in range(0):
    prompt_path = f'../prompts/prompt_{i}.txt'
    with open(prompt_path, 'r', encoding='utf-8') as file:
        prompt = file.read().strip()  # Read and strip any extra whitespace
        prompts.append(prompt)

print(prompts)

# images = []

# for i, prompt in enumerate(prompts):
#     image = pipe(prompt).images[0]
#     image.save(f'images/picture_7.jpg')
#     images.append(image)

images = []
for i, prompt in enumerate(prompts):
    image = pipe(prompt).images[0] # Assuming pipe(prompt) returns a dictionary with the key "sample"
    output_path = f'../images/model2/picture_{i+15}.jpg'
    image.save(output_path)
    images.append(image)