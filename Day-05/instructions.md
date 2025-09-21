# Video Storage

Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

- **Video Size Units:** `"B"`, `"KB"`, `"MB"`, `"GB"`.  
  - If not given one of these, return **"Invalid video unit"**.
- **Drive Size Units:** `"GB"`, `"TB"`.  
  - If not given one of these, return **"Invalid drive unit"**.
- Return the number of **whole videos** the drive can fit.

## Unit Conversions

| Unit | Equivalent |
|------|------------|
| 1 B  | 1 B        |
| 1 KB | 1000 B     |
| 1 MB | 1000 KB    |
| 1 GB | 1000 MB    |
| 1 TB | 1000 GB    |

## Example

Given:

- Video size: `500`
- Video unit: `"MB"`
- Drive size: `100`
- Drive unit: `"GB"`

Determine how many `500 MB` videos can fit on a `100 GB` hard drive.
