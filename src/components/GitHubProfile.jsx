import React, { useState, useEffect } from "react";

function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Appel API GitHub
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données !");
        }
        return response.json();
      })
      .then((data) => {
        // Stocker uniquement les données nécessaires
        const Data = {
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          createdAt: data.created_at,
          updatedAt:data.updated_at,
          reposUrl: data.repos_url,
        };
        setProfile(Data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={styles.container}>
      <h1><strong>GitHub User</strong></h1>
      <h2><strong>{profile.name || "Nom non disponible"}</strong></h2>
      <img
        src={profile.avatar}
        alt="Avatar"
        style={styles.avatar}
      />
      <p>{profile.bio || "Aucune bio disponible."}</p>
      <p>Abonnés: {profile.followers}</p>
      <p>Abonnements: {profile.following}</p>
      <p>Créé le: {profile.createdAt}</p>
      <p>Modifié le: {profile.updatedAt}</p>
      <p>URL repositories: {" "}
        <a href={profile.reposUrl} target="_blank" rel="noopener noreferrer">
        {profile.reposUrl}
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    margin: "30px auto",
  },
  avatar: {
    width: "150px",
    marginBottom: "10px",
  },
};

export default GitHubProfile;