/*
  # User Resumes Schema

  1. New Tables
    - `user_resumes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `title` (text)
      - `data` (jsonb)
      - `template_id` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `is_public` (boolean)

  2. Security
    - Enable RLS on `user_resumes` table
    - Add policies for:
      - Users can read their own resumes
      - Users can create their own resumes
      - Users can update their own resumes
      - Users can delete their own resumes
      - Public resumes are readable by anyone
*/

CREATE TABLE IF NOT EXISTS user_resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  data jsonb NOT NULL,
  template_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_public boolean DEFAULT false
);

ALTER TABLE user_resumes ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own resumes
CREATE POLICY "Users can read own resumes"
  ON user_resumes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR is_public = true);

-- Policy: Users can create their own resumes
CREATE POLICY "Users can create own resumes"
  ON user_resumes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own resumes
CREATE POLICY "Users can update own resumes"
  ON user_resumes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own resumes
CREATE POLICY "Users can delete own resumes"
  ON user_resumes
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);