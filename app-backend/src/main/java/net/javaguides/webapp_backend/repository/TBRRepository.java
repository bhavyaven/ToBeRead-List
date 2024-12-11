package net.javaguides.webapp_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import net.javaguides.webapp_backend.model.Entry;

@Repository
public interface TBRRepository extends JpaRepository<Entry, Long>{
    @Query(value = "CALL GetEntries", nativeQuery=true)
    List<Entry> getEntries();

    @Query(value = "CALL FilterStatus(:status)", nativeQuery = true)
    List<Entry> filterByStatus(String status);

    @Query(value = "CALL GetDistinctStatus", nativeQuery=true)    
    List<String> getDistinctStatus();
}   