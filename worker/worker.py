# worker/worker.py
import os
import google.generativeai as genai
import json
from jsonschema import validate

# Configure the Gemini API key
# Make sure to set the GOOGLE_API_KEY environment variable
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

# JSON schema for workflow validation
workflow_schema = {
    "type": "object",
    "properties": {
        "phases": {"type": "array"},
        "tasks": {"type": "array"},
        "metadata": {"type": "object"},
    },
    "required": ["phases", "tasks", "metadata"],
}

def generate_workflow(prompt, domain, tone, constraints):
    """
    Generates a workflow using the Gemini LLM.
    """
    model = genai.GenerativeModel('gemini-pro')

    # Construct the prompt using the provided template
    full_prompt = f"Create a workflow for: {prompt}. Domain: {domain}. Tone: {tone}. Constraints: {constraints}. Output must be a JSON object that conforms to this schema: {json.dumps(workflow_schema)}"

    response = model.generate_content(full_prompt)

    try:
        generated_workflow = json.loads(response.text)
        validate(instance=generated_workflow, schema=workflow_schema)
        return generated_workflow
    except (json.JSONDecodeError, Exception) as e:
        print(f"Error processing Gemini response: {e}")
        return None

def review_workflow(workflow):
    """
    Reviews an existing workflow for optimization.
    """
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"Review this workflow and suggest missing steps, optimization, or reordering: {json.dumps(workflow)}"
    response = model.generate_content(prompt)
    return response.text

def optimize_workflow(workflow):
    """
    Optimizes a workflow for efficiency.
    """
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"Compress this workflow, parallelize tasks where possible, and adjust priorities: {json.dumps(workflow)}"
    response = model.generate_content(prompt)
    return response.text


if __name__ == "__main__":
    # Example usage
    user_prompt = "Create a marketing campaign for a new product."
    generated_workflow = generate_workflow(user_prompt, "Marketing", "Professional", "None")
    if generated_workflow:
        print("Generated Workflow:")
        print(json.dumps(generated_workflow, indent=2))

        review = review_workflow(generated_workflow)
        print("\nReview:")
        print(review)

        optimization = optimize_workflow(generated_workflow)
        print("\nOptimization:")
        print(optimization)
