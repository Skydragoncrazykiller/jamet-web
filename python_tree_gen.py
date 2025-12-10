import os
import sys

def generate_tree(directory, prefix="", ignore_list=None, max_depth=None, current_depth=0):
    """
    Generate a tree structure of directories and files, ignoring specified folders.
    
    Args:
        directory: Path to the directory
        prefix: Prefix for tree branches
        ignore_list: List of folder/file names to ignore
        max_depth: Maximum depth to traverse (None = unlimited)
        current_depth: Current depth level
    """
    if ignore_list is None:
        ignore_list = [
            'node_modules', 
            '.git', 
            '__pycache__', 
            '.vscode',
            'build',
            'dist',
            '.next',
            'coverage',
            '.cache'
        ]
    
    if max_depth is not None and current_depth >= max_depth:
        return
    
    try:
        items = sorted(os.listdir(directory))
    except PermissionError:
        return
    
    # Filter out ignored items
    items = [item for item in items if item not in ignore_list and not item.startswith('.')]
    
    for i, item in enumerate(items):
        path = os.path.join(directory, item)
        is_last = i == len(items) - 1
        
        # Determine the symbols to use
        connector = "└── " if is_last else "├── "
        extension = "    " if is_last else "│   "
        
        # Print the item
        print(f"{prefix}{connector}{item}")
        
        # If it's a directory, recurse into it
        if os.path.isdir(path):
            generate_tree(
                path, 
                prefix + extension, 
                ignore_list, 
                max_depth, 
                current_depth + 1
            )

def main():
    # Get the directory from command line or use current directory
    directory = sys.argv[1] if len(sys.argv) > 1 else "."
    
    # Optional: Set max depth from command line
    max_depth = int(sys.argv[2]) if len(sys.argv) > 2 else None
    
    print(f"Directory structure of: {os.path.abspath(directory)}")
    print(directory if directory != "." else ".")
    
    generate_tree(directory, max_depth=max_depth)

if __name__ == "__main__":
    main()